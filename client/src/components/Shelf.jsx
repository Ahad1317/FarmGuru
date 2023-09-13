import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'

function Shelf() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedDescription, setUploadedDescription] = useState('');
  const [imageCount, setImageCount] = useState(0);
  const [isCounterIncremented, setIsCounterIncremented] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        const imageURL = response.data.imageURL;
        console.log('Image URL:', imageURL); // Debugging: Check the URL in the console
        setUploadedImage(imageURL);
        setUploadedDescription(description);
        setUploadStatus('Image uploaded successfully.');
        if (!isCounterIncremented) {
          setImageCount(imageCount + 1);
          setIsCounterIncremented(true);
        }
      } else {
        setUploadStatus(response.data.error || 'Something went wrong while uploading the image.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadStatus('Error uploading image. Please try again later.');
    }
  };

  return (
    <div className="containerr shadow my-5 login-container">
      <h1>FARMGURU CROP POST</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <textarea
        placeholder="Enter description..."
        value={description}
        onChange={handleDescriptionChange}
      />
      <button onClick={handleUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
      {uploadedImage && (
        <div>
          <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
      {uploadedDescription && (
        <div>
          <p>Description: {uploadedDescription}</p>
        </div>
      )}
    </div>
  );
}

export default Shelf;
