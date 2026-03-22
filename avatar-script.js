import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x0f0f1a)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 1.4, 2.5)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)
const dirLight = new THREE.DirectionalLight(0xffffff, 1)
dirLight.position.set(0, 5, 5)
scene.add(dirLight)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(0, 1.4, 0)
controls.update()

const loader = new GLTFLoader()
loader.load(
  './avatar.glb',
  (gltf) => {
    scene.add(gltf.scene)
    console.log('Avatar loaded!')
  },
  (progress) => {
    console.log('Loading...', Math.round(progress.loaded / progress.total * 100) + '%')
  },
  (err) => console.error('Error:', err)
)

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}
animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

