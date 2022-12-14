import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import getUuid from 'uuid-by-string'
import {
  getFirestore,
  query,
  getDoc,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db,auth } from '../../firebase.config'
import { Button } from 'react-bootstrap'
import NavbarGallery from '../NavBar/NavBarGallery'
const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`


const GOLDENRATIO = 1.61803398875

export default function Gallery() {
  const [artworks, setArtworks] = useState([]);
  useEffect(() => {
          
      const getUserArtworks = async () => {
         
        const userCol = query(collection(db, 'users'),where('uid', '==', auth.currentUser.uid));
        const userSnapshot = await getDocs(userCol);
        const userList = userSnapshot.docs.map(doc => doc.data());
        userList[0].artworkCollection.map((artwork) => {
          const artCol = query(collection(db, 'artworks'),where('id', '==', artwork));
          const artSnapshot = getDocs(artCol);
          artSnapshot.then((snapshot) => {
            const artList = snapshot.docs[0].data();
            setArtworks(artworks => [...artworks, artList]);
          })
        })

      }
      // Call the async function.
      getUserArtworks()
        .catch(console.error);

     }, []);

     const images = artworks.map((artwork,index) => {
      if(index==0){
      return {
        url: artwork.image[0],
        desc: artwork.prompt.replace(/\s+/g, ''),
        position: [0, 0, 1.5],
        rotation: [0, 0, 0]
      }
    }else if(index==1){
      return {
        url: artwork.image[0],
        desc: artwork.prompt.replace(/\s+/g, ''),
        position: [-1.75, 0, 0.25],
        rotation: [0, Math.PI / 2.5, 0]
      }
    }else if(index==2){
      return {
        url: artwork.image[0],
        desc: artwork.prompt.replace(/\s+/g, ''),
        position: [-2.15, 0, 1.5],
        rotation: [0, Math.PI / 2.5, 0]
      }
    }else if(index==3){
      return {
        url: artwork.image[0],
        desc: artwork.prompt.replace(/\s+/g, ''),
        position: [-2, 0, 2.75],
        rotation: [0, Math.PI / 2.5, 0]
      }
    }else if(index==4){
      return {
        url: artwork.image[0],
        desc: artwork.prompt.replace(/\s+/g, ''),
        position: [-0.8, 0, -0.6],
        rotation: [0, 0, 0]
      }
    }else if(index==5){
      return {
        url: artwork.image[0],
        desc: artwork.prompt.replace(/\s+/g, ''),
        position: [0.8, 0, -0.6],
        rotation: [0, 0, 0]
      }
    }else if(index==6){
      return {
        url: artwork.image[0],
        desc: artwork.prompt.replace(/\s+/g, ''),
        position: [1.75, 0, 0.25],
        rotation: [0, -Math.PI / 2.5, 0]
      }
    }
    else if(index==7){
      return {
        url: artwork.image[0],
        desc: artwork.prompt.replace(/\s+/g, ''),
        position: [2.15, 0, 1.5],
        rotation: [0, -Math.PI / 2.5, 0]
      }
    }
    else if(index==8){
      return {
        url: artwork.image[0],
        desc: artwork.prompt.replace(/\s+/g, ''),
        position: [2, 0, 2.75],
        rotation: [0, -Math.PI / 2.5, 0]
      }
    }
    });
  return (
    <div>
    <NavbarGallery/>
    <Canvas style= {{position:"absolute"}} gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
      <color attach="background" args={['#191920']} />
      <fog attach="fog" args={['#191920', 0, 15]} />
      <Environment preset="city" />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
      </group>
    </Canvas>
    </div>
  )
}

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.025)
    state.camera.quaternion.slerp(q, 0.025)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url,props.desc} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url,desc ,c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const image = useRef()
  const frame = useRef()
  const name = desc
  useCursor(hovered)
  useFrame((state) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, 0.85 * (hovered ? 0.85 : 1), 0.1)
    image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y, 0.9 * (hovered ? 0.905 : 1), 0.1)
    frame.current.material.color.lerp(c.set(hovered ? 'orange' : 'white'), 0.1)
  })
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
        {name.split('-').join(' ')}
      </Text>
    </group>
  )
}
