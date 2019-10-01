function TableList(Class, ItemSlotRows, Spec = null) {
    this.Class = Class;
    this.ItemSlotRows = ItemSlotRows;
    this.Spec = Spec;
};

function WowheadLink(Id, Name, Type = linkType.item, Comment = null) {
    this.Id = Id;
    this.Name = Name;
    this.Type = Type;
    this.Comment = Comment;
};

function ItemSlotRow(Slot, Best, Second, Third, Enchant) {
    this.Slot = Slot;
    this.Best = Best;
    this.Second = Second;
    this.Third = Third;
    this.Enchant = Enchant;
};