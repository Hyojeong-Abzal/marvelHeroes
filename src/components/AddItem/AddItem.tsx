import React from 'react';
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

export type inputValuesType = {
    name: string
    description: string
    file: string
    tag: string
}
export const AddItem = () => {
    const dispatch = useDispatch();

    type FormErrorType = {
        name?: string
        description?: string
        file?: string
        tag?: string
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            file: '',
            tag: ''
        },
        validate: (values) => {
            const errors: FormErrorType = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.description) {
                errors.description = 'Required';
            }
            if (!values.file) {
                errors.file = 'Required';
            }
            if (!values.tag) {
                errors.tag = 'Required';
            }
            
            return errors;
        },
        onSubmit: values => {

            dispatch(addItem(values))
            alert(JSON.stringify(values));
            formik.resetForm()
        },
        

      
    })
debugger
    return <div>
        <Paper elevation={10}>

            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                                target={'_blank'}>here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            variant="outlined"
                            label="name"
                            margin="normal"
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name &&
                            formik.errors.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : null}



                        <TextField
                            type="file"
                            variant="outlined"
                            label="Enter URL of picture"
                            margin="normal"
                            {...formik.getFieldProps('file')}

                        />
                        {formik.touched.file &&
                            formik.errors.file ? <div style={{ color: 'red' }}>{formik.errors.file}</div> : null}

                        <TextField
                            variant="outlined"
                            label="tags(separate with comma)"
                            margin="normal"
                            {...formik.getFieldProps('tag')}

                        />
                        {formik.touched.tag &&
                            formik.errors.tag ? <div style={{ color: 'red' }}>{formik.errors.tag}</div> : null}

                        <TextField
                            variant="outlined"
                            multiline
                            rows={4}
                            label="description"
                            margin="normal"
                            {...formik.getFieldProps('description')}

                        />
                        {formik.touched.description &&
                            formik.errors.description ? <div style={{ color: 'red' }}>{formik.errors.description}</div> : null}
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Add</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Paper>
    </div>
}
