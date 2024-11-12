# Dummy Docker Project

This project is a simple website served with NGINX in a Docker container.

## Building the Docker Image

To build the Docker image, navigate to the directory containing the `Dockerfile` and run the following command:

```bash
sudo docker build -t dummy-docker .
```

This command creates a Docker image named `dummy-docker` based on the instructions in the `Dockerfile`.

## Running the Docker Container

To run the Docker container and serve the website on port 80:

```bash
sudo docker run -d -p 80:80 dummy-docker
```

This command starts the container in detached mode, mapping port 80 on your machine to port 80 in the container.

## Accessing the Website

Once the container is running, you can access the website in your web browser:

- **Local Access**: `http://127.0.0.1`
- **External Access**: `http://your-vm-ip` (if accessing from outside the VM)

Make sure port 80 is open on your VM's firewall if accessing it from outside the VM:

```bash
sudo ufw allow 80
```
