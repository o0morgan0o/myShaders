precision highp float;
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define S(a,b,t) smoothstep(a, b, t);

vec2 random(vec2 p){
  return
  fract(sin(vec2(dot(p, vec2(125.1, 341.4)), dot(p,vec2(234.4, 342.43))))*343.34);
}

void main(void) {
  vec2 uv = gl_FragCoord.xy /resolution.xy;
  vec3 color;

  uv *=6.32;

  vec2 i_st = floor(uv);
  vec2 f_st = fract(uv);

  float m_dist =.89;

  for(int y=-3; y <= 3; y ++ ){
      for(int x = -3; x<= 3; x++){
        vec2 neighbor = vec2(float(x), float(y));
        vec2 point = random(i_st + neighbor);
        point = .5 + smoothstep(.2, .6, ( sin(time * .2))* sin(time + 5.2345908*point));
        vec2 diff = neighbor + point - f_st;
        float dist = length(diff);
        m_dist = min(m_dist, dist);
      }
  }

  color += m_dist;
  // color.r= .5* color.r;
  // color += 1. - step(.02, m_dist);

// color.r += step(.98, f_st.x) + step(.98, f_st.y);

    gl_FragColor = vec4(color,  1.);
}
