class CreateResponses < ActiveRecord::Migration
  def self.up
    create_table :responses do |t|
      t.text :question
      t.string :email
      t.string :hash
      t.boolean :accepted
      t.int :response_to

      t.timestamps
    end
  end

  def self.down
    drop_table :responses
  end
end
