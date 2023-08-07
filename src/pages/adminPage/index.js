import React, { useEffect, useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message , DatePicker, Space , Select  } from 'antd';
import axios from 'axios';
import './index.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { motion } from "framer-motion";


const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [imdbId, setImdbId] = useState('');
  const [country, setCountry] = useState(null);
  const [year, setYear] = useState(null);
  const [director , setDirector] = useState('');
  const [imdbRating , setImdbRating] = useState('');
  const [posterFile, setPosterFile] = useState(null);
  const { Option } = Select;


  useEffect (() => {
    document.title = "JAMAL TV | ADMIN PAGE"
} , [])



  const props = {
    name: 'file',
    multiple: false, // Set this to false to support a single file upload
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }

      // Step 2: Update the state with the selected file
      if (status === 'done' && info.file.response) {
        setPosterFile(info.file.response); // You can store the response or any other data related to the file
      } else {
        setPosterFile(null); // Reset the state if the upload fails or is canceled
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

   
   

   const handleChange = (value) => {
     console.log(`selected ${value}`);
     setCountry(value);
   };


  const onChange = (date, dateString) => {
    console.log(date, dateString);
    if (date) {
      const selectedYear = date.year();
      setYear(selectedYear);
    } else {
      setYear(null);
    }
  };

  async function renderFarm(event) {
    try {
      event.preventDefault();

      // Create a new FormData object to send the file
      const formData = new FormData();
      formData.append('title', title);
      formData.append('imdb_id', imdbId);
      formData.append('country', country);
      formData.append('year', year);
      formData.append('director' , director);
      formData.append('imdb_rating' , imdbRating);
      formData.append('poster', posterFile); // Use the stored file

      const response = await axios.post('https://moviesapi.ir/api/v1/movies/multi', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important! Indicates a file is being sent
        },
      });
      if (response.status >= 200 && response.status < 300) {
        const successBox = document.getElementById("ReqStatus1");
        successBox.classList.add("show");
    
        setTimeout(() => {
          successBox.classList.remove('show');
        }, 5000);
      } 
        
      
      console.log(response.data);
    } catch (e) {
      const errorBox = document.getElementById("ReqStatus2");
        errorBox.classList.add("show");
    
        setTimeout(() => {
          errorBox.classList.remove('show');
        }, 5000);
    }
    
  }

  console.log(`image : ${posterFile}`)

  return (
    <motion.div
    className="home"
    // style={back}
    initial={{ width: 0 }}
    animate={{ width : "100% "}}
    exit={{ x: window.innerWidth , transition : {duration : 0.1}}}
>
    <div className='adminPage'>
      <div className='wrapper'>
        <div className='leftSide'>
          <img src='asstes\images\admin\leftSide.jpg'/>
        </div>
        <div className='rightSide'>
          <div className='contentHolder'>
            <div className='header'>
              <div className='logo'>
                <Link to="/">JAMAL TV</Link>
              </div>
              <div className='profile'>
                <div className='text'>
                  <span className='name'>hossein mazlumi</span>
                  <span className='status'>administrator</span>
                </div>
                <div className='imageHolder'>
                  <img src='asstes\images\admin\profile.jpeg'/>
                </div>
              </div>
            </div>
            <div className='formHolder'>
              <form>
                <div className='box box1'>
                  <label>Title</label>
                  <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='box box2'>
                  <label>IMDB Id</label>
                  <input type='text' value={imdbId} onChange={(e) => setImdbId(e.target.value)} />
                </div>
                <div className='box box3'>
                  <label>Country</label>
                    <Select
                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="select one country"
                    defaultValue={[country]} // Step 4: Use the state variable as the default value
                    onChange={handleChange}
                    optionLabelProp="label"
                  >
                    <Option value="china" label="China">
                      <Space>
                        <span role="img" aria-label="China">
                          🇨🇳
                        </span>
                        China (中国)
                      </Space>
                    </Option>
                    <Option value="usa" label="USA">
                      <Space>
                        <span role="img" aria-label="USA">
                          🇺🇸
                        </span>
                        USA (美国)
                      </Space>
                    </Option>
                    <Option value="japan" label="Japan">
                      <Space>
                        <span role="img" aria-label="Japan">
                          🇯🇵
                        </span>
                        Japan (日本)
                      </Space>
                    </Option>
                    <Option value="korea" label="Korea">
                      <Space>
                        <span role="img" aria-label="Korea">
                          🇰🇷
                        </span>
                        Korea (韩国)
                      </Space>
                    </Option>
                  </Select>
                </div>
                <div className='box box4'>
                  <label>Year</label>
                  <Space direction="vertical">
                    <DatePicker onChange={onChange} picker="year" size="small" style={{width : "100%"}} />
                  </Space>
                </div>
                <div className='box box5'>
                  <label>Director</label>
                  <input type='text' onChange={(e) => setDirector(e.target.value)}/>
                </div>
                <div className='box box6'>
                  <label for="">IMDB Rating</label>
                  <input type='text' onChange={(e) => setImdbRating(e.target.value)}/>
                </div>
                <div className='box box7'>
                  <label for="poster">Poster</label>
                  <input id="poster" type='file' accept='image/*' onChange={(e) => setPosterFile(e.target.files[0])} />
                </div>
                <div className='box box8'>
                  <button onClick={renderFarm}>Add New Movie</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="ReqStatus1">
          <span id='requestStatus'>successfully added</span>
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
        <div id="ReqStatus2">
          <span id='requestStatus'>Try Again</span>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default AdminPage;
