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

-  FOV - Field of View
-  Aspect =
-  Near & Far

These four settings define a `frustum`

``

`Lights`
Settings:

-  `color`: Hue of the light
-  `intensity`: Strength of the light
-  `position` => light.position.set(x,y,z)

> Basic materials (`THREE.MeshBasicMaterial`) are not affected by light, so it's required to use at least one like `THREE.MeshPhongMaterial` because it has some shininess.
