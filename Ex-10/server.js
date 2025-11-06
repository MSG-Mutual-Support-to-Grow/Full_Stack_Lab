const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Schema and Model
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    state: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Customer = mongoose.model('customer', customerSchema);

// Routes

// Home page - Display registration form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Save customer registration
app.post('/save', [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('password').trim().notEmpty().withMessage('Password is required'),
    body('age').isInt({ min: 1, max: 120 }).withMessage('Age must be between 1 and 120'),
    body('mobileNumber').matches(/^[0-9]{10}$/).withMessage('Mobile number must be 10 digits'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('gender').isIn(['Male', 'Female']).withMessage('Gender is required'),
    body('state').trim().notEmpty().withMessage('State is required')
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            success: false,
            errors: errors.array() 
        });
    }

    try {
        const { name, password, age, mobileNumber, email, gender, state } = req.body;

        // Check if email already exists
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ 
                success: false,
                errors: [{ msg: 'Email already registered' }] 
            });
        }

        const newCustomer = new Customer({
            name,
            password,
            age,
            mobileNumber,
            email,
            gender,
            state
        });

        await newCustomer.save();
        console.log('Customer registered:', name);

        res.json({ 
            success: true,
            message: 'Registration successful!' 
        });
    } catch (error) {
        console.log('Error saving customer:', error);
        res.status(500).json({ 
            success: false,
            errors: [{ msg: 'Server error: ' + error.message }] 
        });
    }
});

// Get all customers (API endpoint for AJAX)
app.get('/api/customers', async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.json({ 
            success: true,
            data: customers 
        });
    } catch (error) {
        console.log('Error fetching customers:', error);
        res.status(500).json({ 
            success: false,
            errors: [{ msg: 'Error retrieving customers' }] 
        });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
