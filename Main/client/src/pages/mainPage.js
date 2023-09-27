import React, { useState } from 'react';
import NumberInputBasic from '../component/customnumberinput/customNumberInput';


function MainPage() {
    const [bench, setBench] = useState(0);
    const [squat, setSquat] = useState(0);
    const [deadlift, setDeadlift] = useState(0);
    const [mile, setMile] = useState(0);

    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img alt='LOGO' src='./Fitness-Gym-Barbell-Dumbbell-logo-design-EDITED.jpg'></img>
                    </div>
                    <h1>Fitness+</h1>
                    <li><a href="#Goals">Goals</a></li>
                    <li><a href="#Sleep">Sleep</a></li>
                    <li><a href="#Weight">Weight</a></li>
                    <li><a href='#Calories'>Calories</a></li>
                    <li><a href='#PR'>Personal Records</a></li>
                    <li><a href='#Calendar'>Weekly Calendar</a></li>
                </ul>
                <div class="rightNav">
                    <input placeholder='Search for your food' type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
            <section class="section" id='Calendar'>
                <div class="box-main">
                    <div class="userInput">
                        <h1 class="text-big">
                            Weekly Calendar
                        </h1>
                        <div><input class="calInput"></input><input class="calInput"></input></div>
                        <div class="calendar">
                            <div class="outer">
                            <table>
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
                            <div class="wrap"> 
                            <table>
                                <tbody>
                                <tr>
                                <td><div class="event double"><input type="checkbox" class="checkbox" />8:30–9:30 Yoga</div></td>
                                <td><div class="event double"><input type="checkbox" class="checkbox" /></div></td>
                                <td><div class="event double"><input type="checkbox" class="checkbox"></input></div></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                            </div>
                            </div>
                        </div>
                </div>
            </section>

            <section class="section" id='Goals'>
                <div class="box-main">
                    <div class="userInput">
                        <h1 class="text-big">
                            Your Goals
                        </h1>
                    </div>
                </div>
            </section>

            <section class="section" id='Calories'>
                <div class="box-main">
                    <div class="userInput">
                        <h1 class="text-big">
                            Todays Calories
                        </h1>
                    </div>
                </div>
            </section>            
            
            <section class="section" id='Sleep'>
                <div class="box-main">
                    <div class="userInput">
                        <h1 class="text-big">
                            Sleep
                        </h1>
                    </div>
                </div>
            </section>

            <section class="section" id='Weight'>
                <div class="box-main">
                    <div class="userInput">
                        <h1 class="text-big">
                            Current Weight
                        </h1>
                    </div>
                </div>
            </section>

            <section class="section" id='PR'>
                <div class="box-main">
                    <div class="userInput">
                        <h1 class="text-big">
                            Personal Records
                        </h1>
                        <ul>
                            <li>Bench</li><NumberInputBasic updateValue={setBench} value={bench}/>
                            <li>Squat</li><NumberInputBasic updateValue={setSquat} value={squat}/>
                            <li>Deadlift</li><NumberInputBasic updateValue={setDeadlift} value={deadlift}/>
                            <li>Quickest Mile</li><NumberInputBasic updateValue={setMile} value={mile}/>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default MainPage