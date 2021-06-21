import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper/Paper';
import { addItem } from '../../ItemsList/itemsListReducer';
import style from './AddItem.module.css'
import IconButton from '@material-ui/core/IconButton/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

export type inputValuesType = {
    name: string
    description: string
    url: string
    tags: string
}
type AddItemPropsType = {
    onClickHandler: (value: boolean) => void
}
export const AddItem: React.FC<AddItemPropsType> = (props) => {
    const [url, setUrl] = useState('');
    useEffect(() => {
        // @ts-ignore
        setUrl(localStorage.getItem('recent-image'));
    }, [localStorage.getItem('recent-image')])
    const dispatch = useDispatch();

    type FormErrorType = {
        name?: string
        description?: string
        file?: string
        tags?: string
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            tags: ''
        },
        validate: (values) => {
            const errors: FormErrorType = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.description) {
                errors.description = 'Required';
            }
            if (!values.tags) {
                errors.tags = 'Required';
            }
            return errors;
        },
        onSubmit: values => {
            props.onClickHandler(false)
            alert(JSON.stringify(values));
            let newItem = {
                ...values,
                url
            }
            dispatch(addItem(newItem))
            formik.resetForm()
        }
    })
    const uploader = (file: any) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            debugger
            //@ts-ignore
            localStorage.setItem('recent-image', reader.result)
        })
        reader.readAsDataURL(file);
    }
    return <div className={style.wrapper}>
        <Paper elevation={10}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Button
                    onClick={() => props.onClickHandler(false)}
                    variant="contained"
                    color="primary"
                >
                    <CancelIcon />
                </Button>


                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormGroup row>
                            <TextField
                                variant="outlined"
                                label="name"
                                margin="normal"
                                {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name &&
                                formik.errors.name ? <div className={style.error}>{formik.errors.name}</div> : null}

                            <input
                                type="file"
                                accept="image/*"
                                onChange={e => uploader(e.target.files![0])}

                            />
                            {/* {formik.touched.file &&
                                formik.errors.file ? <div className={style.error}>{formik.errors.file}</div> : null} */}
                            <TextField
                                variant="outlined"
                                label="tags(separate with comma)"
                                margin="normal"
                                {...formik.getFieldProps('tags')}

                            />
                            {formik.touched.tags &&
                                formik.errors.tags ? <div className={style.error}>{formik.errors.tags}</div> : null}
                            <TextField
                                variant="outlined"
                                multiline
                                label="description"
                                margin="normal"
                                {...formik.getFieldProps('description')}

                            />
                            {formik.touched.description &&
                                formik.errors.description ? <div className={style.error}>{formik.errors.description}</div> : null}
                            <Button
                                type={'submit'}
                                variant="contained"
                                color="primary"

                            >
                                <SaveIcon /> Add
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Paper>

    </div>
}
