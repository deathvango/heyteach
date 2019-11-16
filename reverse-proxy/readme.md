## IIS Configuration

Set up the following rules:

1.

```
Pattern: graphql(.*)
Rewrite URL: http://192.168.99.100:5000/{R:0}
```

2.

```
Pattern: (.*)
Rewrite URL: http://localhost:3000/{R:1}
```

In all cases, replace the **Rewrite URL** with the appropriate endpoints.
