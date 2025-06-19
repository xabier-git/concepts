#!/bin/bash

set -e  # Detiene el script si algo falla

# Rutas relativas
FRONT_DIR="./iprofile-frontend"
BACK_DIR="./iprofile-backend"
K8S_DIR="./k8s"

# Nombres de imagen
BACKEND_IMAGE="iprofile-backend:latest"
FRONTEND_IMAGE="iprofile-frontend:latest"

echo "🛠️ Construyendo imagen backend..."
docker build -t $BACKEND_IMAGE $BACK_DIR

echo "🛠️ Construyendo imagen frontend..."
docker build -t $FRONTEND_IMAGE $FRONT_DIR

echo "♻️ Borrando recursos antiguos en Kubernetes..."
kubectl delete -f $K8S_DIR/ingress.yaml --ignore-not-found
kubectl delete -f $K8S_DIR/frontend-deployment.yaml --ignore-not-found
kubectl delete -f $K8S_DIR/frontend-service.yaml --ignore-not-found
kubectl delete -f $K8S_DIR/backend-deployment.yaml --ignore-not-found
kubectl delete -f $K8S_DIR/backend-service.yaml --ignore-not-found
# No borres Mongo si no quieres perder los datos
# kubectl delete -f $K8S_DIR/mongo-deployment.yaml --ignore-not-found
# kubectl delete -f $K8S_DIR/mongo-service.yaml --ignore-not-found

echo "📦 Aplicando YAMLs..."
kubectl apply -f $K8S_DIR/mongo-pvc.yaml
kubectl apply -f $K8S_DIR/mongo-deployment.yaml
kubectl apply -f $K8S_DIR/mongo-service.yaml

kubectl apply -f $K8S_DIR/backend-deployment.yaml
kubectl apply -f $K8S_DIR/backend-service.yaml

kubectl apply -f $K8S_DIR/frontend-deployment.yaml
kubectl apply -f $K8S_DIR/frontend-service.yaml

kubectl apply -f $K8S_DIR/ingress.yaml

echo "✅ Despliegue completo."

