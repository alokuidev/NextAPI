/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
const student = ({params}) => {
  const [studentData, setStudentData] = useState([]);
  const {studentlist} =  params;
  
  const apiCall = async () =>{
    try {
        const response = await fetch(`http://localhost:3000/api/users/${studentlist}`);
        const data = await response.json();
        setStudentData(data)
    } catch (error) {
        console.warn(`Some Error Occurd: ${error}`)
    }
  }  

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <h1 className={styles.heading}>Student List</h1>
      <table className={styles.studentList}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Subjects</th>
          </tr>
        </thead>
        <tbody className={styles.studentTable}>
            
        {studentData.map((elem) =>{
            const subLength = elem.subjects.length;
            return(   
           
           <tr key={elem.id}>
                <td><Link href={`student/${elem.id}`}>{elem.id}</Link></td>
                <td>{elem.name}</td>
                <td>{elem.age}</td>
                <td>{elem.grade}</td>
                <td>{elem.subjects.map((sub,index) =>  (subLength -1 === index) ? `${sub}` : `${sub} ,` )}</td>
            </tr>)
            })}
        </tbody>
      </table>
    </>
  );
};

export default student;
