import React from "react";

export default function NavBar () {
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
        </div>
    )
}
