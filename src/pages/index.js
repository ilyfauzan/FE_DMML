import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: ''
  });

  const [result, setResult] = useState('');
  const [validationError, setValidationError] = useState({
    q1: false,
    q3: false,
    q4: false,
    q5: false
  });

  const validateInput = (name, value) => {
    if (name === 'q1') {
      return /^[a-zA-Z]*$/.test(value);
    } else if (['q3', 'q4', 'q5'].includes(name)) {
      return /^\d*$/.test(value);
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = validateInput(name, value);

    setValidationError({ ...validationError, [name]: !isValid });

    if (isValid) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(`Form submitted! Data: ${JSON.stringify(formData)}`);
  };

  return (
    <div className={styles.container}>
      <img src="/header.jpg" alt="Image Description" className={styles.headerImage} />
      <h1 className={styles.title}>Student Academic Performance</h1>
      <form id="personalityTestForm" onSubmit={handleSubmit}>
        <div className={styles.question}>
          <label htmlFor="q1">Name</label>
          <input
            type="text"
            name="q1"
            value={formData.q1}
            onChange={handleChange}
            className={`${styles.inputField} ${validationError.q1 ? styles.error : ''}`}
            required
          />
          {validationError.q1 && <p className={styles.errorMessage}>Only letters allowed</p>}
        </div>
        <div className={styles.question}>
          <label htmlFor="q2">Gender</label>
          <select
            name="q2"
            value={formData.q2}
            onChange={handleChange}
            className={styles.inputField}
            required
          >
            <option value="">Select one</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className={styles.question}>
          <label htmlFor="q6">Pendidikan Ortu</label>
          <select
            name="q6"
            value={formData.q6}
            onChange={handleChange}
            className={styles.inputField}
            required
          >
            <option value="">Select one</option>
            <option value="SMA">SMA</option>
            <option value="SMK">SMK</option>
            <option value="D3">D3</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
          </select>
        </div>
        <div className={styles.question}>
          <label htmlFor="q7">Apakah Siswa membawa bekal ke sekolah?</label>
          <select
            name="q7"
            value={formData.q7}
            onChange={handleChange}
            className={styles.inputField}
            required
          >
            <option value="">Select one</option>
            <option value="Terkadang">Terkadang</option>
            <option value="Sering">Sering</option>
          </select>
        </div>
        <div className={styles.question}>
          <label htmlFor="q3">Reading Score</label>
          <input
            type="text"
            name="q3"
            value={formData.q3}
            onChange={handleChange}
            className={`${styles.inputField} ${validationError.q3 ? styles.error : ''}`}
            required
          />
          {validationError.q3 && <p className={styles.errorMessage}>Only numbers allowed</p>}
        </div>
        <div className={styles.question}>
          <label htmlFor="q4">Writing Score</label>
          <input
            type="text"
            name="q4"
            value={formData.q4}
            onChange={handleChange}
            className={`${styles.inputField} ${validationError.q4 ? styles.error : ''}`}
            required
          />
          {validationError.q4 && <p className={styles.errorMessage}>Only numbers allowed</p>}
        </div>
        <div className={styles.question}>
          <label htmlFor="q5">English Score</label>
          <input
            type="text"
            name="q5"
            value={formData.q5}
            onChange={handleChange}
            className={`${styles.inputField} ${validationError.q5 ? styles.error : ''}`}
            required
          />
          {validationError.q5 && <p className={styles.errorMessage}>Only numbers allowed</p>}
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      {result && <div id="result" className={styles.result}>{result}</div>}
    </div>
  );
}
