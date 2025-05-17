# ThreeJS Tutorial Documentation Sandbox

Materials:

-  https://discoverthreejs.com/
-

### Improved auto-completion with JSConfig

```JSON
{
  "compilerOptions": {
    "paths": {
      "three/webgpu": ["./node_modules/three/build/three.webgpu.js"],
      "three/tsl": ["./node_modules/three/build/three.tsl.js"],
    },
  }
}
```

## Concepts

`Camera`

Camera settings:

-  FOV
-  Aspect
-  Near & Far

These four settings define a `frustum`

``
