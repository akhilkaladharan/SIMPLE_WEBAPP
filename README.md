# 🚀 Simple DevOps Web Application Project

## 📌 Overview

This project demonstrates a complete **end-to-end DevOps workflow**:

- Simple Node.js web application  
- Containerization using Docker  
- CI pipeline using Jenkins  
- Deployment on Kubernetes  
- Service exposure using NodePort  

---

## 🧱 Tech Stack

- Node.js  
- Docker  
- Jenkins  
- Kubernetes  

---

## 📁 Project Structure
├── app.js

├── package.json

├── Dockerfile

├── Jenkinsfile

├── deployment.yaml

├── service.yaml

└── README.md


---

## 🌐 Application Details

- Runs on port: **3000**
- Response:


 Hello from DevOps Project 🚀


---

## ⚙️ Setup Steps

### 1️⃣ Clone Repository
```text
git clone https://github.com/<your-username>/simple-web-app.git

cd simple-web-app
```


---

### 2️⃣ Run Application Locally

node app.js

Access:
```
http://localhost:3000/
```

---

## 🐳 Docker Setup

### Build Image

```
docker build -t simple-web-app .
```
### Run Container

```
docker run -d -p 3000:3000 --name web-container simple-web-app
```

---

## 🚀 Push to Docker Hub

```
docker tag simple-web-app <your-dockerhub-username>/simple-web-app

docker push <your-dockerhub-username>/simple-web-app
```
---

## ⚙️ Jenkins Pipeline

Pipeline stages:

- Git Checkout  
- Build Docker Image  
- Run Container (Test Stage)  

---

## ☸️ Kubernetes Deployment

### Apply Deployment
```
kubectl apply -f deployment.yaml
```

### Apply Service
```
kubectl apply -f service.yaml
```

---

## 📊 Verification

### Check Pods
```
kubectl get pods
```

### Check Services
```
kubectl get svc
```

---

## 🌐 Access Application

### Using Minikube

```
minikube service simple-web-service
```

### Using NodePort

```
http://<NODE-IP>:30007
```

---

## 📦 Kubernetes Configuration

### Deployment

- Replicas: **2**  
- Container Port: **3000**

### Service

- Type: **NodePort**  
- Port: **80**  
- TargetPort: **3000**

---

## 🔄 Workflow

1. Code pushed to GitHub  
2. Jenkins pulls code  
3. Docker image built  
4. Container runs for testing  
5. Kubernetes deploys application  

---

## ⚠️ Troubleshooting

### Kubernetes Not Running
minikube start

---

## 🎯 Key Learnings

- Docker containerization  
- Jenkins CI pipeline  
- Kubernetes deployment  
- DevOps workflow  

---

## 👨‍💻 Author

**Akhil K**  
DevOps Engineer  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

