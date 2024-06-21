// pages/index.js
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(`Form submitted! Data: ${JSON.stringify(formData)}`);
  };

  return (
    <div className={styles.container}>
      <img src="/header.jpg" alt="Image Description" className={styles.headerImage} />
      <h1>Student Academic Performance</h1>
      <form id="personalityTestForm" onSubmit={handleSubmit}>
        <div className={styles.question}>
          <p>Name</p>
          <input type="text" name="q1" value={formData.q1} onChange={handleChange} required />
        </div>
        <div className={styles.question}>
          <p>Math Score</p>
          <input type="text" name="q2" value={formData.q2} onChange={handleChange} required />
        </div>
        <div className={styles.question}>
          <p>Reading Score</p>
          <input type="text" name="q3" value={formData.q3} onChange={handleChange} required />
        </div>
        <div className={styles.question}>
          <p>Writing Score</p>
          <input type="text" name="q4" value={formData.q4} onChange={handleChange} required />
        </div>
        <div className={styles.question}>
          <p>English Score</p>
          <input type="text" name="q5" value={formData.q5} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && <div id="result" className={styles.result}>{result}</div>}
    </div>
  );
}
