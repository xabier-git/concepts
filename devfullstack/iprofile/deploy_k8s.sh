#!/bin/bash

echo "🔄 Aplicando PVC para MongoDB..."
kubectl apply -f k8s/mongo-pvc.yaml

echo "🛠️ Desplegando MongoDB..."
kubectl apply -f k8s/mongo-deployment.yaml
kubectl apply -f k8s/mongo-service.yaml

echo "🛠️ Desplegando Backend..."
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml

echo "🛠️ Desplegando Frontend..."
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml

echo "🌐 Aplicando Ingress..."
kubectl apply -f k8s/ingress.yaml

echo "✅ Todo desplegado correctamente."
