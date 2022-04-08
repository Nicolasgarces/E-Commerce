"""empty message

Revision ID: f06d3e68a259
Revises: a5a2a33f15f8
Create Date: 2022-04-06 23:41:53.939118

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f06d3e68a259'
down_revision = 'a5a2a33f15f8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('order_cart', sa.Column('productID', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'order_cart', 'product', ['productID'], ['productID'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'order_cart', type_='foreignkey')
    op.drop_column('order_cart', 'productID')
    # ### end Alembic commands ###
