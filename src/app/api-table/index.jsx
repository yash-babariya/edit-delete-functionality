import React, { useState } from 'react'
import './apitable.scss'
import DataTable from 'react-data-table-component'

export default function ApiTable() {
    const [photos, setPhotos] = useState([])

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setPhotos(data))

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
                        <img src={row.url} height={50} alt="colors-code" />
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
                        <img src={row.thumbnailUrl} height={50} alt="Thumbnail" />
                    </div>
                );
            },
        }
    ]
    return (
        <div className='ApiTable'>
            <DataTable pagination columns={columns} data={photos} />
        </div>
    )
}
