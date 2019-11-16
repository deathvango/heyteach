

# Instructions

## Building the Image

1. To build the container use:

``` 
  docker build -t <web app name> . 
```

2. Your image should now be in docker:

```
PS C:\Path> docker images

REPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE
<web app name>             latest              2c958a777e06        15 hours ago        906MB
node                       10                  e45bc9197ec9        3 weeks ago         903MB
hello-world                latest              fce289e99eb9        10 months ago       1.84kB
```

## Running the Image

1. To run the image use:
```
PS C:\Path> docker run -p 49160:8080 -d <web app name>:latest
```
_*```-d``` runs the container in detached mode, meaning it will run in the background_

_*```-p``` redirects a public port to a private port inside the container._

2. Get the container ID:

```
PS C:\Path> docker ps

CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS                     NAMES
fe2aba06fde0        <web app name>             "docker-entrypoint.s…"   17 minutes ago      Up 17 minutes       0.0.0.0:49160->8080/tcp   dazzling_tereshkova
```

3. Print the output of the app using the container ID:
```
PS C:\Path> docker logs fe2aba06fde0

Running on http://0.0.0.0:8080
```

4. If you need to go inside the container you can use:

```
PS C:\Path> docker exec -it fe2aba06fde0 /bin/bash

root@fe2aba06fde0:/usr/src/app#
```
_* If you need to exit the embedded shell, use the ```exit``` command._

## Testing the container

_You need to use one of two different kinds of instructions, depending on which machine you are on._

### Linux Instructions

1. Using the port # that you assigned the container to, run the following ```curl```
  - This example was taken directly from the nodejs.org example, I do not know if this is what it actually looks like.
```
$ curl -i localhost:49160

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-M6tWOb/Y57lesdjQuHeB1P/qTV0"
Date: Mon, 13 Nov 2017 20:53:59 GMT
Connection: keep-alive

Hello world
```

### Windows Instructions

1. In Windows, the docker is run on top of a hyper visor as a VM. So instead of using ```localhost:<PORT>```, you need to get the IP address of the docker machine(s):

```
PS C:\Path> docker-machine ls

NAME      ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER     ERRORS
default   *        virtualbox   Running   tcp://192.168.99.100:2376           v19.03.5
```

2. Using the IP address, you should now be able to call into the docker container:

```
PS C:\Path> curl 192.168.99.100:49160


StatusCode        : 200
StatusDescription : OK
Content           : Hello world

RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Content-Length: 12
                    Content-Type: text/html; charset=utf-8
                    Date: Sat, 16 Nov 2019 16:57:44 GMT
                    ETag: W/"c-M6tWOb/Y57lesdjQuHeB1P/qTV0"
                    X-Powered-By: Express...
Forms             : {}
Headers           : {[Connection, keep-alive], [Content-Length, 12], [Content-Type, text/html; charset=utf-8], [Date, Sat, 16 Nov 2019 16:57:44 GMT]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 12
```

# References

These instructions were compiled following this tutorial: https://nodejs.org/de/docs/guides/nodejs-docker-webapp/.

If you are running this at windows, then the solution to actually call into the docker container was found here: https://stackoverflow.com/questions/41093812/how-to-get-docker-containers-to-talk-to-each-other-while-running-on-my-local-hos.