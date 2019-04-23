import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.file[0].name);
  };

  return (
    <React.Fragment>
      <form>
        <div className='custom-file'>
          <input type='file' className='custom-file-input' id='customFile' />
          <label className='custom-file-label' for='customFile'>
            {filename}
          </label>
        </div>
        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </React.Fragment>
  );
};

export default FileUpload;
