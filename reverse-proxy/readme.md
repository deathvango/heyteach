## IIS Configuration

Set up the following reverse-proxy url rewrite rules:

1.

```
Pattern: graphql(.*)
Rewrite URL: http://192.168.99.100:5000/{R:0}
```

2.

```
Pattern: mysql(.*)
Rewrite URL: http://http://192.168.99.100:3306/{R:1}
```

3.

```
Pattern: (.*)
Rewrite URL: http://http://192.168.99.100:3000/{R:1}
```

In all cases, replace the **Rewrite URL** with the appropriate endpoints.
