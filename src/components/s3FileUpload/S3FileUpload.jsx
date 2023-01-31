import React, { useState } from "react";
import { Storage } from "aws-amplify";
import { MDBBtn } from 'mdb-react-ui-kit';
import './styles/fileUpload.css'
import { SimpleButton } from "../buttons/Buttons";

const S3FileUpload = () => {
    const [displayUpload, setDisplayUpload] = useState(false);
    const [files, setFiles] = useState([]);
    const [uploaded, setUploaded] = useState([]);
    
    const handleChange = async (e) => {
        let result = [];
        for(const f of e.target.files){
            const fileContent = f;
            const fileType = f.type;
            const ext = fileContent.name
                .split(".")
                .pop()
                .toLowerCase();
            const fileFormats = ["csv"];
            if (!fileFormats.includes(ext)) {
                console.log("Invalid file format");
                return false;
            }
            const fileName =
                "input/devops/" +
                fileContent.name.substr(0, fileContent.name.indexOf(ext) - 1) +
                "." +
                ext;
            const file = {
                name: f.name,
                fileName: fileName,
                fileContent: fileContent,
                fileType: fileType
            };
            result.push(file);
        }
        setFiles(result);
    };

    const handleUploadClick = () => {
        for(const f of files){
            handleUpload(f);
        }
    }

    const handleUpload = async (f) => {
        try {
            await Storage.put(f.fileName, f.fileContent, {
                contentType: f.fileType,
                level: "public",
                progressCallback(progress) {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                },
            });
            setUploaded(filesUploaded => [...filesUploaded, f.fileName]);
        } catch (err) {
            console.log(err);
        }
    }

    const handleClickClose = () => {
        setDisplayUpload(false);
        setFiles([]);
        setUploaded([]);
    }

    const hiddenFileInput = React.useRef(null);

    const handleBrowseClick = () => {
        setUploaded([]);
        setFiles([]);
        hiddenFileInput.current.click();
    }

    return (
        <div>
            <SimpleButton 
                variant='special'
                className='me-1 uploadButton'
                color='secondary'
                onClick={() => setDisplayUpload(true)}
            >Upload file</SimpleButton>
            <div className={displayUpload ? "uploadWindow" : "hidden"}>
                <MDBBtn
                    className="closeButton"
                    color='danger'
                    onClick={handleClickClose}>
                </MDBBtn>
                {uploaded.length > 0 ?
                    <div>
                        <h3>Uploaded:</h3>
                        <ul>
                            {uploaded.map((f) => <li key={f}>{f}</li>)}
                        </ul> 
                    </div>:
                    <div>
                        <ul>
                            {files.map((f) => <li key={f.name}>{f.name}</li>)}
                        </ul>
                    </div>
                }
                <input
                    className="hidden"
                    type="file"
                    ref={hiddenFileInput}
                    accept="text/csv"
                    onChange={(evt) => handleChange(evt)}
                />
                {files.length > 0 && uploaded.length === 0 ? 
                    <MDBBtn
                        rounded
                        className='centered-h'
                        color='info'
                        onClick={handleUploadClick}
                    >Upload</MDBBtn> :
                    <MDBBtn
                        rounded
                        className='centered-h'
                        color='info'
                        onClick={handleBrowseClick}
                    >Browse</MDBBtn>
                }
            </div>
        </div>
    );
};

export default S3FileUpload;
