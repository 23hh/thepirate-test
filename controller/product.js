const { Product, Option, Delivery } = require("../models");
const Sequelize = require("sequelize");
const dayjs = require("dayjs");
require("dayjs/locale/ko");
dayjs.locale("ko");

//상품 추가 API
async function addProduct(req, res) {
  try {
    const { name, description } = req.body;
    const { type, closing, price } = req.body.delivery;
    const result = await Product.create({ name, description });

    console.log(result.id);
    await Delivery.create({ type, closing, price, id: result.id });

    for (var key in req.body.options) {
      if (req.body.options.hasOwnProperty(key)) {
        let value = req.body.options[key];
        await Option.create({
          name: value.name,
          price: value.price,
          stock: value.stock,
          id: result.id,
        });
      }
    }

    return res.status(201).send({
      msg: "상품 등록 성공",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ msg: "상품 등록 실패" });
  }
}

//상품 목록 조회 API
async function prouctList(req, res) {
  try {
    const product = await Product.findAll({
      include: [
        {
          model: Option,
          attributes: [[Sequelize.fn("max", Sequelize.col("price")), "price"]],
        },
      ],
      attributes: ["name", "description"],
      order: [["createdAt", "DESC"]],
      raw: true,
    });
    return res.status(201).json({ product });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ msg: "상품 조회 실패" });
  }
}

//수령일 선택 목록 API
async function prouctDetail(req, res) {
  try {
    const { id } = req.params;
    const detail = await Product.findAll({
      where: { id },
      attributes: ["name", "description"],
      include: [
        { model: Delivery, where: { id }, attributes: ["type"] },
        {
          model: Option,
          where: { id },
          attributes: ["name", "price"],
        },
      ],
    });
    return res.status(201).json({ detail });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ msg: "상품 상세조회 실패" });
  }
}

//상품 삭제 API
async function selectDelivery(req, res) {
  try {
    const { id } = req.params;
    const select = await Delivery.findOne({ id });
    console.log(select.type);
    console.log(select.closing);
    const today = dayjs().format("YYYY-MM-DD-ddd");
    const now = dayjs().format("HH:mm");
    console.log(today, now);

    console.log(select.closing > now);
    let count = 0;
    let i = 0;
    while (i < 5) {
      //마감전
      if (select.closing > now) {
        i++;
        console.log("fist", today.subtract(i, "ddd"));
      }
      //익일발송
      if (select.type == "regular") {
        i++;
        console.log("second", i);
      }
      if (true) count++;
      console.log(count, "21313");
    }
  } catch (err) {}
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    return res.status(201).send({ msg: "상품 삭제 성공" });
  } catch (err) {
    return res.status(400).send({ msg: "상품 삭제 실패" });
  }
}

module.exports = {
  addProduct,
  prouctList,
  prouctDetail,
  selectDelivery,
  deleteProduct,
};
