# Check out https://hub.docker.com/_/node to select a new base image
#Alterado para a versao mais nova para ter o Git - Assaf
FROM node:10   

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY --chown=node ifood/package*.json /home/node/app/

#COPY --chown=node ifood/*.json /home/node/app/
RUN git clone https://github.com/jlhora/FIAP_FASE06.git

#Ajustando o pwd para buildar - Assaf
WORKDIR /home/node/app/FIAP_FASE06/ifood    
#RUN ls /home/node/app/FIAP_FASE06/ifood


RUN npm install
# Bundle app source code
#COPY --chown=node ifood/. .

RUN npm run build

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "node", "." ]
