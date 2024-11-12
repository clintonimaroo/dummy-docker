FROM nginx:latest

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/clintonimaroo/dummy-docker.git /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
