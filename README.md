# Groceries-API-REST

Groceries API REST is a robust and feature-rich RESTful API designed for managing product data in a MongoDB database, tailored specifically for grocery store management systems. Built with JavaScript, Node.js, and Express, this API provides a seamless interface for performing CRUD (Create, Read, Update, Delete) operations on product data.

## Features

- **Comprehensive CRUD Operations**: Groceries API REST offers a comprehensive set of CRUD operations, allowing users to efficiently manage product data with ease.

- **Express Middleware**: Utilizing Express middleware such as CORS and Morgan enhances security and logging capabilities, ensuring a secure and well-documented API.

- **MongoDB Integration with Mongoose**: Seamless integration with MongoDB using Mongoose facilitates efficient storage and retrieval of product information, ensuring optimal performance and scalability.

## Dependencies

- **cors**: ^2.8.5
- **ejs**: ^3.1.9
- **express**: ^4.18.2
- **mongoose**: ^8.1.1
- **morgan**: ^1.10.0

## Development Dependencies

- **dotenv**: ^16.4.1
- **nodemon**: ^3.0.3

## Getting Started

To start using Groceries API REST:

1. **Clone the Repository**: Clone the repository to your local machine.
   
2. **Install Dependencies**: Install dependencies using `npm install`.

3. **Set Up Environment Variables**: Configure environment variables in a `.env` file as needed, following the example provided in `.env.example`.

4. **Start the Server**: Start the server using `npm start` or `npm run dev` for development with nodemon.

5. **Access the API Endpoints**: Utilize the API endpoints to perform CRUD operations for managing product data.

## API Endpoints

- `GET /`: Retrieve all products.
- `GET /:barcode`: Retrieve a specific product by barcode.
- `POST /`: Insert a new product.
- `PUT /:barcode`: Update an existing product by barcode.
- `DELETE /delete/:barcode`: Delete a product by barcode.

## Usage

Groceries API REST provides a straightforward and efficient way to manage product data for grocery store management systems. Integrate the API endpoints into your frontend application to seamlessly perform CRUD operations.

## Contribution

Contributions to Groceries API REST are welcome! If you have any suggestions, feature requests, or bug reports, please submit them through the repository's issue tracker.

## License

This project is under the MIT License. Please refer to the [LICENSE](LICENSE) file for more details.

## Contact

If you have questions, suggestions, or comments, don't hesitate to get in touch with me. You can reach me at my social media.

## Farewell

I hope you find this repository useful for learning and practicing. If you have any questions or need assistance, please feel free to contact me. Enjoy exploring my GitHub profile!