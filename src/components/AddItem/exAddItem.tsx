import { Input } from '@material-ui/core';
import React, { useEffect, useState } from 'react';




export const ExAdd = () => {
    debugger
    const UploadForm = ({ uploader }: any) => {
        const handleChange = (e: any) => {
            uploader(e.target.files[0])
        }
        return <form>
            <input type="file" accept="image/*" onChange={handleChange} />
        </form>;
    }

    const [url, setUrl] = useState('');
    const uploader = (file: any) => {
        debugger
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            debugger
            //@ts-ignore
            localStorage.setItem('recent-image', reader.result)
        })
        reader.readAsDataURL(file);
    }
    useEffect(() => {
        //@ts-ignore
        setUrl(localStorage.getItem('recent-image'));
    }, [localStorage.getItem('recent-image')])
    return (
        <div>
            <UploadForm uploader={uploader} />
            <img src={url} alt="" />

        </div>
    );
}
