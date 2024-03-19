import React, { useEffect, useState } from 'react'
import './apitable.scss'
import DataTable, { createTheme } from 'react-data-table-component'

export default function ApiTable() {
    const [photos, setPhotos] = useState([])
    const apiCall = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setPhotos(data))
    }
    useEffect(() => {
        apiCall();
    }, [])


    const columns = [
        {
            name: "AlbumId",
            selector: (row) => row.albumId,
        },
        {
            name: "Id",
            selector: (row) => row.id,
        },
        {
            name: "Title",
            selector: (row) => row.title,
        },
        {
            name: "imeges",
            selector: (row) => row.url,
            cell: (row) => {
                return (
                    <div>
                        <img src={row.url} height={30} width={70} alt="colors-code" />
                    </div>
                );
            },
        },
        {
            name: "Thumbnail",
            selector: (row) => row.thumbnailUrl,
            cell: (row) => {
                return (
                    <div>
                        <img src={row.thumbnailUrl} width={70} height={30} alt="Thumbnail" />
                    </div>
                );
            },
        }
    ]
    createTheme('dark', {
        background: {
            default: 'transparent',
        },
    });
    return (
        <div className='ApiTable'>
            <div className="heading">
                <h1>Api Table</h1>
            </div>
            <div className="container">
                <div className="table">
                    <DataTable pagination columns={columns} theme="solarized" data={photos} />
                </div>
            </div>
        </div>
    )
}
