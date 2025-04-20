import React, { useState, useEffect } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './SubmitProject.css';

const SubmitProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const testFirebase = async () => {
      try {
        console.log('Testing Firebase connectivity...');
        const querySnapshot = await getDocs(collection(db, 'projects'));
        console.log('Firestore test successful. Number of projects:', querySnapshot.size);
      } catch (error) {
        console.error('Firebase connectivity test failed:', error);
      }
    };
    testFirebase();
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      console.log('Image selected:', e.target.files[0].name);
      setImage(e.target.files[0]);
    } else {
      console.log('No image selected');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit triggered');
    console.log('Form values:', { title, description, githubLink, tags, image });

    if (!title || !description || !githubLink) {
      console.log('Validation failed: Missing required fields');
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    try {
      console.log('Starting submission process...');
      let imageUrl = '';
      if (image) {
        console.log('Uploading image to Storage...');
        const imageRef = ref(storage, `project-images/${image.name}-${Date.now()}`);
        const uploadResult = await uploadBytes(imageRef, image);
        console.log('Image uploaded:', uploadResult);
        imageUrl = await getDownloadURL(imageRef);
        console.log('Image URL:', imageUrl);
      } else {
        console.log('No image provided, skipping upload');
      }

      console.log('Adding document to Firestore...');
      const docRef = await addDoc(collection(db, 'projects'), {
        title,
        description,
        githubLink,
        tags: tags ? tags.split(',').map(tag => tag.trim().toLowerCase()) : [],
        imageUrl,
        createdAt: Timestamp.now(),
      });
      console.log('Document added with ID:', docRef.id);

      setSuccessMsg('Project submitted successfully!');
      setTitle('');
      setDescription('');
      setGithubLink('');
      setTags('');
      setImage(null);
      document.getElementById('image-upload').value = '';
      setErrorMsg('');
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMsg(`Failed to submit project: ${error.message}`);
    }
  };

  const handleButtonClick = () => {
    console.log('Submit button clicked');
  };

  return (
    <div className="matrix-content submit-project-content">
      <h1 className="matrix-header">Submit a Project - Computer Science Club</h1>
      {successMsg && <p className="success-message">{successMsg}</p>}
      {errorMsg && <p className="error-message">{errorMsg}</p>}
      <form onSubmit={handleSubmit} className="submit-form">
        <input
          className="matrix-input"
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="matrix-textarea"
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        />
        <input
          className="matrix-input"
          type="url"
          placeholder="GitHub Link"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)} // Fixed from previous version
          required
        />
        <input
          className="matrix-input"
          type="text"
          placeholder="Tags (comma-separated, e.g., AI, Web)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          id="image-upload"
          className="matrix-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button
          className="matrix-button"
          type="submit"
          onClick={handleButtonClick}
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default SubmitProject;