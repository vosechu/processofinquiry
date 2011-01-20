class CreateInquiries < ActiveRecord::Migration
  def self.up
    create_table :inquiries do |t|
      t.text :question
      t.string :email
      t.string :hash
      t.boolean :status

      t.timestamps
    end
  end

  def self.down
    drop_table :inquiries
  end
end
