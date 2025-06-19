#!/bin/bash

echo "🗑️ Eliminando Ingress..."
kubectl delete -f k8s/ingress.yaml

echo "🗑️ Eliminando Frontend..."
kubectl delete -f k8s/frontend-service.yaml
kubectl delete -f k8s/frontend-deployment.yaml

echo "🗑️ Eliminando Backend..."
kubectl delete -f k8s/backend-service.yaml
kubectl delete -f k8s/backend-deployment.yaml

echo "🗑️ Eliminando MongoDB..."
kubectl delete -f k8s/mongo-service.yaml
kubectl delete -f k8s/mongo-deployment.yaml

echo "🗑️ Eliminando PVC..."
kubectl delete -f k8s/mongo-pvc.yaml

echo "✅ Limpieza completa."
