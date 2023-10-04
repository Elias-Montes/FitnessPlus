import React, { useState } from 'react';
import NumberInputBasic from '../component/customnumberinput/customNumberInput';
import Box from '@mui/material/Box';
import "./mainPage.css"
import Stack from '@mui/system/Stack';

function MainPage() {
    const [bench, setBench] = useState(0);
    const [squat, setSquat] = useState(0);
    const [deadlift, setDeadlift] = useState(0);
    const [mile, setMile] = useState(0);
    const [calories, setCalories] = useState(0);
    const [sleep, setSleep] = useState(0);
    const [weight, setWeight] = useState(0);

const style =                     {
    display: 'flex',
    justifyContent: "space-evenly",
    mx: 30,
    my: 1,
    p: 1,
    color: (theme) =>
        theme.palette.mode === 'dark' ? 'black' : 'black',
    border: '1px solid',
    borderRadius: 2,
    fontSize: '30px',
    fontWeight: '500',
}

const prStyle2 = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
}

const prStyle = {
    width: '34%',
}

const inputStyle = {
    display: 'flex',
    justifyContent: 'center'
}

    return (
        <div className="body">
            <Box className="" sx={style}>
                {"Weekly Calendar"}
            </Box>
            {/* <div><input className="calInput"></input><input className="calInput"></input></div> */}

            <Box className="calendar outer">
                <table className="dayTable">
                    <thead>
                        <tr>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                </table>
                <div className="wrap">
                    <table>
                        <tbody>
                            <tr>
                                <td><div className="event double"><input type="checkbox" className="checkbox" /><input></input>8:30–9:30 Yoga</div></td>
                                <td><div className="event double"><input type="checkbox" className="checkbox" /></div></td>
                                <td><div className="event double"><input type="checkbox" className="checkbox" /></div></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Box>

                    <Box className="" id='Goals' sx={style}>
                        {"Goals"}
                    </Box>
                    <Stack sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '80%',
                        justifyContent: 'space-center',
                        mx: '12%',
                        }} direction='row' useFlexGap flexWrap="wrap">
                        <Box sx={{p: '10px'}}>
                            <input type='checkbox'></input><input></input><label> Goal Weight</label>
                        </Box>
                        <Box sx={{p: '10px'}}>
                            <input type='checkbox'></input><input></input><label> Daily Calories</label>
                        </Box>
                        <Box sx={{p: '10px'}}>
                            <input type='checkbox'></input><input></input><label> Weekly Sleep</label>
                        </Box>
                        <Box sx={{p: '10px'}}>
                            <input type='checkbox'></input><input></input><label> Bench Max</label>
                        </Box>
                        <Box sx={{p: '10px'}}>
                            <input type='checkbox'></input><input></input><label> Squat Max</label>
                        </Box>
                        <Box sx={{p:'10px'}}>
                            <input type='checkbox'></input><input></input><label> Deadlift Max</label>
                        </Box>
                        <Box sx={{p: '10px'}}>
                            <input type='checkbox'></input><input></input><label> Goal Mile Time</label>
                        </Box>
                    </Stack>
                    
                    <Box className="" id='Calories' sx={style}>
                        {"Calories"}
                    </Box>
                        <Box sx={inputStyle}><NumberInputBasic updateValue={setCalories} value={calories} /></Box>
                    
                    <Box className="" id='Sleep' sx={style}>
                        {"Sleep"}
                    </Box>
                    <Box sx={inputStyle}><NumberInputBasic updateValue={setSleep} value={sleep} /></Box>

                    <Box className="" id='Weight' sx={style}>
                        {"Current Weight"}
                    </Box>
                    <Box sx={inputStyle}><NumberInputBasic updateValue={setWeight} value={weight} /></Box>

                        <Box className="" id='PR' sx={style}>
                            {"Personal Records"}
                        </Box>
                        <Box sx={prStyle2}>
                            <Box sx={prStyle}><label>Bench</label><NumberInputBasic updateValue={setBench} value={bench} /></Box>
                            <Box sx={prStyle}><label>Squat</label><NumberInputBasic updateValue={setSquat} value={squat} /></Box>
                            <Box sx={prStyle}><label>Deadlift</label><NumberInputBasic updateValue={setDeadlift} value={deadlift} /></Box>
                            <Box sx={prStyle}><label>Quickest Mile</label><NumberInputBasic updateValue={setMile} value={mile} /></Box>
                        </Box>
                </div>
    )
}

export default MainPage