FROM roboxes/centos8:latest
#RUN yum update
#yum install -y iputils-ping

WORKDIR /home
# # default to port 80 for node, and 9229 and 9230 (tests) for debug
# ARG PORT=80
# ENV PORT $PORT
# EXPOSE $PORT 9229 9230

# COPY package.json /code/package.json
# COPY package-lock.json /code/package-lock.json
#RUN npm install
#
# check every 30s to ensure this service returns HTTP 200
#  HEALTHCHECK --interval=30s \
#    CMD node healthcheck.js
#RUN yum install iputils-ping

#RUN apt-get install iputils-ping
# RUN apk update
# RUN apt install iputils-ping

# copy in our source code last, as it changes the most
COPY . /home
#RUN yum -y install wget

#RUN npm install mysql2

CMD ["sleep", "infinity"]

# if you want to use npm start instead, then use `docker run --init in production`
# so that signals are passed properly. Note the code in index.js is needed to catch Docker signals
# using node here is still more graceful stopping then npm with --init afaik
# I still can't come up with a good production way to run with npm and graceful shutdown
#CMD [ "node", "src/index.js" ]
#CMD [ "node", "fmdir/database.js" ]

# FROM development as dev-envs
# RUN <<EOF
# apt-get update
# apt-get install -y --no-install-recommends git
# EOF

# RUN <<EOF
# useradd -s /bin/bash -m vscode
# groupadd docker
# usermod -aG docker vscode
# EOF
# # install Docker tools (cli, buildx, compose)
# COPY --from=gloursdocker/docker / /
