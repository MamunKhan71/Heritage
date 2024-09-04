# Heritage

**Heritage** is a comprehensive property listing platform built using modern web technologies. The platform allows users to view and bid on properties, upload property listings, provide testimonials, and access detailed team information. 

## Live Link
### Live Website Link: [Click Here](https://bistroboss-ddefc.web.app/)

## Features to Implement

### Property Listings
- **Details**: Users can view detailed information and images for each property.
- **Bidding Info**: Display the current highest bid under the property details gallery, including bid amount, bidder details, and location.

### Bidding Process
- **Placing a Bid**: Users can submit bids within a specified range, with the system validating and updating the highest bid.
- **Bid Win**: The highest bidder wins the property, and the property name will be shown in their profile.

### Property Upload Page
- **Upload Properties**: Create a page where users can upload properties to be listed on the website.

### Testimonials
- **Feedback**: Users can submit and view reviews and ratings for properties on the property details page.

### Team Information
- **Details**: View information about team members, including their roles and contact details.

### Search Functionality
- **Search**: Users can search for properties using keywords related to property features or location.

### Filter Functionality
- **Filters**: Users can refine property searches using criteria such as price range, number of bedrooms, and other property features.

## Tech Stack

- **Front-End**: React
- **Back-End**: Express.js
- **Database**: MongoDB

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MamunKhan71/Heritage
    cd Heritage
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following variables:
    ```
    DB_URI=your_mongodb_uri
    PORT=your_local_port
    JWT_SECRET=your_secret_key
    
    ```

4. **Run the backend server**:
    ```bash
    cd backend
    node index.js
    ```

5. **Run the frontend development server**:
    ```bash
    cd frontend
    npm run dev
    ```

## Usage

- **Access the application**: Open your browser and navigate to `http://localhost:5173` to explore the Heritage platform.

## Submission Method

- **GitHub Repository**: [GitHub](https://github.com/MamunKhan71/Heritage)
- **Live Link**: [Live Link](https://bistroboss-ddefc.web.app/)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the platform.

## Acknowledgements

- Inspired by the need for an efficient and user-friendly property listing platform.
- Thanks to all contributors who have helped in the development of this project.

---
## Screenshots
![Screenshot 1](https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725458650/1_sv287p.png)
![Screenshot 2](https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725458649/2_qxap00.png)

