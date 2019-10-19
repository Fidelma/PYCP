import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/buttonStyles.css';

const Button = () => (
<div id='buttons'>

<Link to='/registration'>
<button className='mainBtn'>
<h2>New Registration</h2>
<p>Create new consent form record.</p>
</button>
</Link>

<Link to='/contact'>
<button className='mainBtn'>
<h2>Contact Details</h2>
<p>Contact details for children</p>
</button>
</Link>

<Link to='/activities'>
<button className='mainBtn'>
<h2>Activity Details</h2>
<p>View activities and create, edit or delete.</p>
</button>
</Link>

<Link to='/people'>
<button className='mainBtn'>
<h2>Register</h2>
<p>View details and filter reports</p>
</button>
</Link>


</div>
);

export default Button;
