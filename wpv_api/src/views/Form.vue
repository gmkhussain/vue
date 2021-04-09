<template>
  <div class="inner-content">
 
    <button class="btn btn-primary" @click="addRow">
        <Font-awesome-icon :icon="['fas', 'plus']" /> Add
    </button>
    
    <div class="create-segment">
      <!-- <div class="header-inner">
        <div class="h-inner">
          <span class="material-icons">segment</span>
          <input
            type="text"
            class="header-input"
            placeholder="Enter segment name"
            v-model="name"
          />
        </div>

        <p>Contacts match</p>
        <select
          :searchable="false"
          :clearable="false"
          v-model="selectedCondition"
          :options="['all', 'any']"
        >
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <p>of the following conditions:</p>
      </div> -->

      <div class="create-segment-row">

        <div v-for="(row, index) in rows" :key="index">
          <p v-show="index > 0" class="p-end">
            {{ selectedCondition === "all" ? "AND" : "OR" }}
          </p>
          <div class="row select-rows">
            <div class="d-flex">
              <div class="dropdown primary-dropdown">
                <select
                  label="name"
                  :searchable="false"
                  :clearable="false"
                  :options="rowOptions"
                  @option:selected="onRowOptionSelect($event, index)"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
              </div>
              <div class="dropdown primary-dropdown mr-4 ml-4">
                <select class="fields">
                    <option value="1">1</option>
                    <option value="1">2</option>
                </select>
              </div>
              <div class="dropdown primary-dropdown">
                <input
                  class="fields"
                  type="date"
                  v-show="row.field.type.slug == 'date'"
                  placeholder="Select date"
                />
                <input
                  class="fields"
                  type="number"
                  v-show="row.field.type.slug == 'number'"
                  placeholder="Enter number"
                />
                <input
                  class="fields"
                  type="text"
                  placeholder="Enter text"
                  v-show="row.field.type.slug == 'text'"
                />
                <div
                  v-if="row.field.type.slug == 'tag'"
                  class="dropdown primary-dropdown d-inline-flex mr-2 fields"
                >
                  <a
                    class="my-btn dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {{ "Select Tag" }}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a
                      class="dropdown-item"
                      href="#"
                      v-for="(tag, index) in tags"
                      :key="index"
                      @click="setRowTag(tag, index)"
                      >{{ tag.name }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <a class="mt-2" href="#" @click="removeRow(index)">
              <i class="fas fa-trash"></i>Remove
            </a>
          </div>
        </div>

        <hr />

        <div>
          <button
            @click="saveSegment"
            class="btn btn-secondary d-block ml-auto mt-4"
          >
            Save segment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import collection from "collect.js";
// import tagServices from "../../services/tag/tag";
// import segmentServices from "../../services/segment/segment";
// import audienceServices from "../../services/audience/audience";
// import logicOperatorServices from "../../services/logic-operator/logic-operator";
// import audienceCustomFieldServices from "../../services/audience/audience-custom-fields";

export default {
  data() {
    return {
      tags: [],
      name: null,
      audience: false,
      audiences: [],
      operators: [],
      selectedCondition: "any",
      selectedRowOption: {
        id: "first_name",
        name: "First Name",
        type: {
          slug: "text",
        },
      },
      operatorOptions: [],
      defaultRowOptions: [
        {
          id: "first_name",
          name: "First Name",
          type: {
            slug: "text",
          },
        },
        {
          id: "last_name",
          name: "Last Name",
          type: {
            slug: "text",
          },
        },
        {
          id: "email",
          name: "Email",
          type: {
            slug: "text",
          },
        },
        {
          id: "tag",
          name: "Tag",
          type: {
            slug: "tag",
          },
        },
      ],
      rowOptions: [],
      abdal: [
        {
          id: 123,
          operator: {
            id: "bla",
          },
        },
        {
          id: 345,
          operator: {
            id: "alb",
          },
        },
      ],
      defaultRow: {
        field: {
          id: "first_name",
          name: "First Name",
          type: {
            slug: "text",
          },
        },
        operators: [],
        selectedOperator: null,
        value: null,
      },
      rows: [],
    };
  },
  methods: {
    addRow() {
      this.rows.push(this.defaultRow);
      let rowIndex = this.rows.length - 1;
      this.setRowLogicOperators("text", rowIndex);
    },
    removeRow(index) {
      this.rows.splice(index, 1);
    },
    // async fetchAudience() {
    //   await audienceServices.list().then((response) => {
    //     this.audiences = response.data.data;
    //   });
    // },
    // async fetchTags() {
    //   await tagServices.list().then((response) => {
    //     this.tags = response.data.data;
    //   });
    // },
    // async fetchAudienceCustomFields(audience) {
    //   await audienceCustomFieldServices.show(audience.id).then((response) => {
    //     this.rowOptions = collection
    //       .collect(this.defaultRowOptions)
    //       .merge(response.data.data)
    //       .all();
    //   });
    // },
    // async fetchLogicOperators() {
    //   await logicOperatorServices.listing().then((response) => {
    //     this.operators = response.data.data;
    //   });
    // },
    setDefaultRow() {
      this.rows = [this.defaultRow];
    },
    setAudience(audience) {
      this.audience = audience;
    },
    // setRowTag(tag, index) {
    //   //
    // },
    // setRowFieldOption(field, index) {
    //   var row = this.rows[index];
    //   row.field = field;
    //   Vue.set(this.rows, index, row);
    // },
    setRowLogicOperators(type, i) {
      var operators = 0;
      // var operators = collection.collect(this.operators);      
      const result = this.rows.map((o, index) => ({
        ...o,        
        operators: ( (i === index) ? operators.where("type", o.field.type.slug).all() : o.operators)        
      }));

      this.rows = result;
    },
    resetRows() {
      this.setDefaultRow();
    },
    resetLogicOperator(index) {
      this.rows[index].selectedOperator = null;
    },
    resetValueInput(index) {
      this.rows[index].value = null;
    },
    async onAudienceSelect(audience) {
      this.setAudience(audience);
      await this.fetchAudienceCustomFields(audience);
      this.resetRows();
      this.setRowLogicOperators("text", 0);
    },
    onRowOptionSelect(field, index) {
      this.resetLogicOperator(index);
      this.resetValueInput(index);
      this.setRowFieldOption(field, index);
      this.setRowLogicOperators(field.type.slug, index);
    },
    onRowLogicOperatorSelect(operator, index) {
      this.rows[index].selectedOperator = operator.id;
    },
    // generatePayload() {
    //   let logic = [];

    //   this.rows.forEach(function (row, index) {
    //     let rowLogic = {};

    //     if (!isNaN(row.field.id)) {
    //       //for custom fields logic
    //       rowLogic = {
    //         type: "field",
    //         field: row.field.id,
    //         operator: row.selectedOperator,
    //         value: row.value,
    //       };
    //     } else if (row.field.id == "tag") {
    //       //for tag logic
    //       rowLogic = {
    //         type: "tag",
    //         operator: row.selectedOperator,
    //         value: row.value,
    //       };
    //     } else {
    //       //for default fields logic
    //       rowLogic = {
    //         type: "default_field",
    //         field: row.field.id,
    //         operator: row.selectedOperator,
    //         value: row.value,
    //       };
    //     }

    //     logic.push(rowLogic);
    //   });

    //   return {
    //     name: this.name,
    //     condition: this.selectedCondition == "all" ? 1 : 2,
    //     logic: logic,
    //   };
    // },
    saveSegment() {
      let payload = this.generatePayload();
      console.log(payload);
      // this.errors.reset();
      // segmentServices.create(this.audience, payload).catch(response => {
      //     if(response.status == 422) {
      //         console.log(response.data.data.errors);
      //         // this.errors.setMessages(response.data.data.errors);
      //     }
      // });
    },
  },
  async mounted() {
    await this.fetchAudience();
    await this.fetchTags();
    await this.fetchLogicOperators();
  },
};
</script>


<style scoped>
 
.d-flex {
    display: flex;
    
}
    
    .dropdown {
        margin: 10px 8px;
    }


</style>