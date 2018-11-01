# git pull newest code
git pull

# build the new image
docker build . -t front:v1

# delete the old image
# todo: delete runing cantainer
docker images|grep none|awk '{print $3}'|xargs docker rmi

# run container
docker run -d -p 8888:8888 front:v1
