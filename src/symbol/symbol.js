import Base from '../clazz/Base';

export default class Symbol extends Base {
  constructor(options) {
    super(options);
    this.name = '';
    this.type = '';
    this.geomtry = null;
  }
  /**
   * 在设备上下文中绘制符号,未实现,需要在子类中重写.
   * @param {object} ctx - 设备上下文,通过canvas.getContext('2d')方法获得.
   * @return {undefined}
   */
  draw(ctx, geomtry) {
    this.name = '';
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5; // 线宽一般设置为偶数。
    ctx.save();
    ctx.moveTo(...geomtry[geomtry.length - 2]);
    ctx.lineTo(...geomtry[geomtry.length - 1]);
    ctx.stroke();
    ctx.restore();
  }

  drawing(ctx, geomtry) {
    const innerGeomtry = geomtry.map(item => item);
    this.name = '';
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5; // 线宽一般设置为偶数。
    ctx.save();
    ctx.moveTo(...innerGeomtry[0]);

    let timer = setInterval(() => {
      if (innerGeomtry.length) {
        const line = innerGeomtry.shift();
        ctx.lineTo(...line);
        ctx.stroke();
        ctx.restore();
      } else {
        clearInterval(timer);
      }
    }, 10);
    return timer;
  }
}

