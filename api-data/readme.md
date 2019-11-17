## MySql Instructions

1. To login as the root user, use:

```
root@c86ff80d7524:/# mysql -uroot -p
Enter password:
```

2. Some useful commands once logged into mysql

```
mysql> show databases;
mysql> use <database name>;
mysql> use show tables;
```

## Docker Instructions

1. To build the app, use:

```
docker build -t alisekkoper/heyteach-api-data .
```

2. To run the app, use the following command

```
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret alisekkoper/heyteach-api-data:latest
```

3. The conf file is located in /etc/mysql/ if you need to make changes to it.
