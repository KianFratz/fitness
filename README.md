# Fitness Tracker - Microservices Architecture

A comprehensive workout tracking application built with microservices architecture to practice modern distributed system development. This application allows users to log various types of workouts and receive AI-powered feedback and suggestions for improvement.

## 🏋️ Features

- **Workout Logging**: Track multiple workout types including:
  - Swimming
  - Walking
  - Lifting (Weight Training)
  - Cycling
- **Activity Metrics**: Log workout duration and calories burned
- **AI-Powered Reviews**: Get personalized suggestions and improvements powered by Gemini AI
- **User Authentication**: Secure authentication and authorization with Keycloak
- **Real-time Updates**: Asynchronous communication between services using RabbitMQ

## 🛠️ Tech Stack

### Backend
- **Spring Boot** - Microservices framework
- **PostgreSQL** - Relational database for structured data
- **MongoDB** - NoSQL database for flexible data storage
- **RabbitMQ** - Message broker for inter-service communication
- **Eureka Server** - Service discovery and registration
- **Keycloak** - Identity and access management

### Frontend
- **React** - UI library
- **Material-UI** - Component library for modern UI design
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

### DevOps & Tools
- **Docker** - Containerization
- **Postman** - API testing and documentation

### AI Integration
- **Gemini AI** - AI-powered workout analysis and recommendations

## 🏗️ Architecture

This application follows a microservices architecture pattern with the following key components:

```
├── Eureka Server (Service Registry)
├── API Gateway
├── Authentication Service (Keycloak)
├── Workout Service
├── User Service
├── AI Review Service (Gemini Integration)
├── RabbitMQ (Message Broker)
└── Frontend (React)
```

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- Java 17 or higher
- Node.js 16+ and npm
- Docker and Docker Compose
- PostgreSQL
- MongoDB
- RabbitMQ
- Keycloak

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KianFratz/fitness.git
cd fitness
```

### 2. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=fitness_db
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password

MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DB=fitness_db

# RabbitMQ Configuration
RABBITMQ_HOST=localhost
RABBITMQ_PORT=5672
RABBITMQ_USER=guest
RABBITMQ_PASSWORD=guest

# Keycloak Configuration
KEYCLOAK_URL=http://localhost:8080
KEYCLOAK_REALM=fitness-realm
KEYCLOAK_CLIENT_ID=fitness-client
KEYCLOAK_CLIENT_SECRET=your_client_secret

# Gemini AI Configuration
GEMINI_API_KEY=your_gemini_api_key

# Eureka Server
EUREKA_SERVER_URL=http://localhost:8761/eureka
```

### 3. Run with Docker Compose

```bash
docker-compose up -d
```

### 4. Run Services Individually

#### Start Eureka Server
```bash
cd eureka-server
./mvnw spring-boot:run
```

#### Start Backend Services
```bash
# In separate terminals
cd workout-service
./mvnw spring-boot:run

cd user-service
./mvnw spring-boot:run

cd ai-review-service
./mvnw spring-boot:run
```

#### Start Frontend
```bash
cd frontend
npm install
npm start
```

## 📱 Usage

1. **Register/Login**: Create an account or login using Keycloak authentication
2. **Log Workout**: Navigate to the workout page and log your activity:
   - Select workout type (Swimming, Walking, Lifting, Cycling)
   - Enter duration
   - Enter calories burned
3. **View AI Feedback**: After logging a workout, receive AI-generated suggestions and improvements
4. **Track Progress**: View your workout history and progress over time

## 🔌 API Endpoints

### Workout Service
- `POST /api/workouts` - Create a new workout
- `GET /api/workouts` - Get all workouts for authenticated user
- `GET /api/workouts/{id}` - Get specific workout
- `PUT /api/workouts/{id}` - Update workout
- `DELETE /api/workouts/{id}` - Delete workout

### User Service
- `POST /api/users/register` - Register new user
- `GET /api/users/profile` - Get user profile

### AI Review Service
- `POST /api/ai/review` - Get AI review for workout
- `GET /api/ai/suggestions/{workoutId}` - Get suggestions for specific workout

## 🧪 Testing

Use the provided Postman collection for API testing:

```bash
# Import the collection
postman-collection.json
```

## 🐳 Docker Support

Build and run all services using Docker:

```bash
# Build all images
docker-compose build

# Start all services
docker-compose up

# Stop all services
docker-compose down
```

## 📊 Monitoring

- **Eureka Dashboard**: http://localhost:8761
- **RabbitMQ Management**: http://localhost:15672
- **Keycloak Admin Console**: http://localhost:8080/admin

## 🎯 Learning Objectives

This project was created to practice and demonstrate:

- Microservices architecture design
- Service discovery with Eureka
- Message-driven architecture with RabbitMQ
- Containerization with Docker
- Authentication and authorization with Keycloak
- Integration of AI services
- Full-stack development with Spring Boot and React
- RESTful API design
- Database management (SQL and NoSQL)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Kian Fratz**

- GitHub: [@KianFratz](https://github.com/KianFratz)

## 🙏 Acknowledgments

- Spring Boot Documentation
- React Documentation
- Material-UI Components
- Gemini AI API
- RabbitMQ Tutorials

---

**Note**: This is a learning project focused on microservices architecture. Feel free to use it as a reference for your own microservices projects!
