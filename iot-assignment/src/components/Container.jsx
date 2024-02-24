import { useState, useEffect } from "react"
import Dexie from "dexie"

const Container = () => {
    const [uploadedFile, setUploadedFile] = useState({
        file: null,
        success: false
    })
    const [receivedFile, setReceivedFile] = useState(null)

    const db = new Dexie('exampleDatabase')
    db.version(1).stores({
        songs: "++id, name, song"
    })

    const resetDB = () => {
        db.delete()
        window.location.reload(false);
    }

    const onFileChange = (event) => {
        setUploadedFile({ ...uploadedFile, file: event.target.files[0] })
    }

    const getSongs = async () => {
            await db.songs.toArray()
                .then(res => {
                    if (res.length > 0) {
                        setReceivedFile(res[res.length - 1])
                    }
                })
                .catch(e => console.log(e))
    }

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const onFileUpload = () => {
        getBase64(uploadedFile.file).then(res => db.songs.add({
            name: uploadedFile.file.name,
            song: res
        })
            .then(setUploadedFile({ ...uploadedFile, success: true }))
            .catch(e => alert(`Upload Unsuccesful. Error: ${e}`)))
    }

    useEffect(() => {
        getSongs()
    }, [uploadedFile.file, receivedFile])

    return (
        <div className="container">
            <div className="card">
                <div className="upload-section">
                    <h3>Steps:</h3>
                    <ol>
                        <li>Upload a audio file.</li>
                        <li>After successful upload, listen to the audio.</li>
                        <li>Use the reset button to reset the database.</li>
                    </ol>
                    <input type="file" name="song" id="song" accept="audio/*" onChange={onFileChange} />
                    <button onClick={onFileUpload}>Upload</button>
                </div>
                <div className="play-section">
                    <h3>{receivedFile ? "Play the song" : "Upload the song"}</h3>
                    {receivedFile ? <p>{receivedFile.name}</p> : null}
                    <audio src={receivedFile ? receivedFile.song : null} controls></audio>
                    <button onClick={resetDB}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Container
