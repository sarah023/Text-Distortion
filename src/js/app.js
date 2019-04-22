const text = new Blotter.Text('sarah grundy', {
  family: "'Helvetica', serif",
  size: 72,
  fill: '#171717',
  paddingTop: 100,
  paddingLeft: 100
});

//
const material = new Blotter.ChannelSplitMaterial();

//'uniforms' describe how the material's effects are rendered
material.uniforms.uOffset.value = 0.05;
material.uniforms.uApplyBlur.value = 1.0;
material.uniforms.uAnimateNoise.value = 1.0;
material.uniforms.uRotation.value = 360.0;

const blotter = new Blotter(material, {
  texts: text
});

const element = document.getElementById('text');
const scope = blotter.forText(text);

scope.appendTo(element);

const page = document.querySelector('body');

page.addEventListener('mousemove', event => {
  material.uniforms.uRotation.value = event.pageX + 100 / 0.5;
  material.uniforms.uRotation.value = event.pageY + 100 / 0.5;
});
