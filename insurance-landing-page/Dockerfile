FROM node:16.18

ENV PORT=3000

COPY . /insurance-landing-page
WORKDIR /insurance-landing-page
RUN yarn install
EXPOSE ${PORT}
CMD ["yarn", "dev"]