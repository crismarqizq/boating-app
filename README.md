# ⛵️ Fullstack project: Boating-app ⚓️

## 🔎 Intro

It's the final fullstack project where the main objective is to apply everything learnt during the last three months by developing a web app of our choice, in my case, an app were sailors can book their stays in different ports.

### 🌊 Why Boating-app?

The main idea was to mix technology with a field/subject I am really passionate about: the sea.  While thinking about this, I asked myself, if in Internet you can book in different sites the accomodation in-land, what about an app to book stays in port when sailing? And that is how Boating-app was born.

### 🔧 Used Technologies/Packages

- JavaScript
- React
- React Router
- NodeJS
- MongoDB
- Mongoose
- Axios
- Jsonwebtoken
- Dotenv

## 🎯 Goals

- [ ] User Login
- [ ] Register User
- [ ] CRUD of user's boats
- [ ] CRUD of port bookings
- [ ] User settings
- [ ] View main port info
- [ ] View the weather on each port

## 📚 Description

### Components

- Navbar
- Home
- Menu
- Ports
- User's settings
- User's bookings
- User's boats

### Data Model

All data storage is done in MongoDB by using Mongoose.

Users

- _id: '',
- name: '',
- surname: '',
- DOB: date
- passport: '',
- email: '',
- contact: '+34 123456789',
- address:

Boats

- _id: '',
- name: '',
- flag: '',
- regNumber: 234252,
- sail: true
- length: number
- beam: number
- draft: number

Ports

- _id: '',
- name: '',
- coordinates: [40.123432, 0.8495893],
- address:
- berths
- contact:
  - vhf: 9,
  - phone: '+34 555555555'
- facilities: ['wc', 'restaurant', 'laundry', 'swim', 'parking', 'gas', 'gym', 'travel']

myBookings

- dates
- port
- boat
- status
- actions
  - edit/delete booking

## 🎨 Design

Both Login and Register pages are divided, on the left hand side the form is set. On the right hand, I have used an aerial image of two boats.

### Color Palette

I have chosen a combination of 4 colours: navy, mid-grey, turqoise and white bone. I think these tones are the perfect match for the theme of the app.

### Tools & Libraries

- Tailwind
- AntDesign
