const text = new Blotter.Text('suck a dick', {
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

const blotter = new Blotter(material, {
  texts: text
});

const element = document.getElementById('text');
const scope = blotter.forText(text);

scope.appendTo(element);
