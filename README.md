# Se você quiser rodar o MongoDB como um container no Docker, use o seguinte comando:
docker run -d --name mongo_db -p 27017:27017 -v mongo_data:/data/db mongo:6

# Verificar se o MongoDB está rodando:
docker exec -it mongo_db mongosh

# Se precisar acessar o MongoDB dentro do container, use:
docker stop mongo_db

# Se quiser reiniciar o container depois:
docker start mongo_db

# Se quiser remover o container completamente:
docker rm mongo_db

# Se quiser remover tudo, incluindo os dados, use:
docker volume rm mongo_data
