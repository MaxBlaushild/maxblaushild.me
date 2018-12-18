import React, { Component } from 'react';
import * as THREE from 'three';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    background: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1000000
    }
};

const nearPlane = 1;
const farPlane = 5000;
const fieldOfView = 75
const fogHex = 0x000000;
const fogDensity = 1;
const particleCount = 1000;
const parameters = [[16737792, 25], [414463, 20], [16737792, 15], [414463, 10], [16737792, 5]];


class Background extends Component {
	render = () => <div id='background' className={this.props.classes.background} />

	componentDidMount = () => {
		this.windowHalfX = window.innerWidth / 2;
		this.windowHalfY = window.innerHeight / 2;
		this.aspectRatio = this.windowHalfX / this.windowHalfY;

		this.camera = new THREE.PerspectiveCamera(fieldOfView, this.aspectRatio, nearPlane, farPlane);
        this.camera.position.z = farPlane / 3;
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(fogHex, fogDensity);
        this.scene.background = new THREE.Color( 0xffffff );
        this.materials = [];

        const container = document.getElementById('background');

        this.createParticles();

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        container.appendChild(this.renderer.domElement);

        window.addEventListener('resize', this.onWindowResize, false);

        this.animate();

	}

    onWindowResize = () => {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    };

    createParticles = () => {
    	const geometry = new THREE.Geometry();

        for (let i = 0; i < particleCount; i++) {
            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 4000 - 2000;
            vertex.y = Math.random() * 4000 - 2000;
            vertex.z = Math.random() * 4000 - 2000;
            geometry.vertices.push(vertex);
        }

        const parameterCount = parameters.length;

        for (let i = 0; i < parameterCount; i++) {
            const size  = parameters[i][1];
            this.materials[i] = new THREE.PointCloudMaterial({size:size});
            const particles = new THREE.PointCloud(geometry, this.materials[i]);
            particles.rotation.x = Math.random() * 6;
            particles.rotation.y = Math.random() * 6;
            particles.rotation.z = Math.random() * 6;
            this.scene.add(particles);
        }

    }

    animate = () => {
    	requestAnimationFrame(this.animate);
    	this.newFrame();
    }

    newFrame = () => {
	    const time = Date.now() * 0.00005;

	    this.camera.position.x += (this.camera.position.x) * -0.05;
	    this.camera.position.y += (this.camera.position.y) * -0.05;

	    this.camera.lookAt(this.scene.position);

	    for (let i = 0; i < this.scene.children.length; i ++) {
	      const object = this.scene.children[i];

	        object.rotation.y = time * (i < 4 ? i + 3 : - (i + 3));
	    }

	    for (let i = 0; i < this.materials.length; i ++) {
	      const color = parameters[i][0];
	      this.materials[i].color.setHex(color);
	    }

	    this.renderer.render(this.scene, this.camera);
    }
}

export default withStyles(styles)(Background);
