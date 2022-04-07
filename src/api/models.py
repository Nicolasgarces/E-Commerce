from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    lastName = db.Column(db.String(120),unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    orders = db.relationship('OrderCart', backref='user', lazy=True)
    address = db.relationship('Address', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class OrderCart(db.Model):
    orderCartID = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer, nullable=False)
    TotalMount = db.Column(db.Integer,unique=False, nullable=True)
    productID = db.Column(db.Integer, db.ForeignKey('product.productID'),
        nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)

    
    
    def __repr__(self):
        return '<OrderCart %r>' % self.orderCartID

    def serialize(self):
        return {
            "orderCartID": self.orderCartID,
            "quantity": self.quantity,
            "productID": self.productID,
            "TotalMount": self.TotalMount,
            "user_id": self.user_id
        }

class Product(db.Model):
    productID = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=True)
    price = db.Column(db.Integer,unique=False, nullable=True)
    description = db.Column(db.Text, unique=True, nullable=False)
    category = db.Column(db.String(256), unique=False, nullable=False)
    image = db.Column(db.String(256), unique=False, nullable=False)
    orders = db.relationship('OrderCart', backref='order', lazy=True)
    

    def __repr__(self):
        return '<Product %r>' % self.productID

    def serialize(self):
        return {
            "productID": self.productID,
            "title": self.title,
            "price": self.price,
            "description": self.description,
            "category": self.category,
            "image": self.image
        }



class Address(db.Model):
    addressID = db.Column(db.Integer, primary_key=True)
    address1 = db.Column(db.String(120), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    

    def __repr__(self):
        return '<Address %r>' % self.addressID

    def serialize(self):
        return {
            "addressID": self.addressID,
            "address1": self.address1,
            "user_id": self.user_id
        }

